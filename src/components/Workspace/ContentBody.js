import React, { useEffect, useState } from 'react';
import categories from '../../Utils/tableau.utils';
import { renderField } from '../../Utils/renderField.utils';
import { useLocation } from 'react-router-dom';
import { extractIdFromUrl } from '../../Utils/id.utils';
import { getFormsByWorkspaceId } from '../../Services/axios.services';

const ContentBody = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = extractIdFromUrl(searchParams);
  const [forms, setForms] = useState([]);
  const [error, setError] = useState(null);
  const [fields, setFields] = useState({});

  const [options, setOptions] = useState({});

  const handleLabelChange = (id, newLabel) => {
    setFields(prevFields => ({
      ...prevFields,
      [id]: {
        ...prevFields[id],
        label: newLabel,
        placeholder: `Enter ${newLabel.toLowerCase()}`,
      }
    }));
  };

  const handleBlur = (e, id) => {
    handleLabelChange(id, e.target.innerText);
  };

  useEffect(() => {
    const fetchForms = async () => {
      if (id) {
        try {
          const data = await getFormsByWorkspaceId(id);
          if (Array.isArray(data)) {
            setForms(data);
            // Construire l'état des champs en fonction des titres des forms
            const newFields = data.reduce((acc, form) => {
              const matchingCategoryItem = categories
                .flatMap(category => category.items)
                .find(item => item.label === form.title);

              if (matchingCategoryItem) {
                acc[form.id] = {
                  label: form.title,
                  placeholder: `Enter ${form.title.toLowerCase()}`,
                  id: matchingCategoryItem.id
                };
              }
              return acc;
            }, {});
            setFields(newFields);
          } else {
            setError('Data is not an array');
          }
        } catch (err) {
          setError('Error fetching forms');
          console.error(err);
        }
      }
    };

    fetchForms();
  }, [id]);

  return (
    <div className="mr-[40px]">
      <div className="overflow-auto w-full flex flex-col items-center justify-center bg-red-100 border border-gray-300 rounded-lg shadow-lg ml-5 my-5 p-6 space-y-4">
        {Object.keys(fields).map(fieldId => {
          const field = fields[fieldId];
          return (
            <div key={fieldId} className="mb-4 w-full">
              <div
                contentEditable
                onBlur={(e) => handleBlur(e, fieldId)}
                className="block mb-2 text-sm font-medium cursor-text"
              >
                {field.label}
              </div>
              {renderField(field.id, field.label, field.placeholder, setOptions, options)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentBody;

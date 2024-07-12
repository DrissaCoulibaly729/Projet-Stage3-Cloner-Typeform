import { AiOutlineCheckSquare, AiOutlinePlus } from 'react-icons/ai';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const SidebarD = () => {
  return (
    <div className="flex flex-col w-64 border-l-2 bg-gray-100 p-5 box-border">
      <div className="flex flex-col space-y-4">
        {/* Onglets */}
        <ul className="flex flex-row space-x-2">
          <li>
            <button
              id="sidebar:question"
              role="tab"
              aria-controls="sidebar:question"
              aria-selected="true"
              className="text-base p-2 focus:outline-none"
            >
              Content
            </button>
          </li>
          <li>
            <button
              id="sidebar:design"
              role="tab"
              aria-controls="sidebar:design"
              aria-selected="false"
              className="text-base p-2 focus:outline-none"
            >
              Design
            </button>
          </li>
          <li>
            <button
              id="sidebar:logic"
              role="tab"
              aria-controls="sidebar:logic"
              aria-selected="false"
              className="text-base p-2 focus:outline-none"
            >
              <div className="flex items-center">
                <span className="text-gray-900">Logic</span>
              </div>
            </button>
          </li>
        </ul>

        {/* Options sous chaque onglet */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <span className="text-gray-900">Question</span>
            <div className="flex space-y-2 mt-2">
              <div className="flex items-center">
                <span>Text</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="flex items-center ml-auto focus:outline-none bg-gray-200 rounded-full px-4 py-2"
                >
                  <span className="sr-only">Toggle</span>
                  <AiOutlineCheckSquare size={16} />
                </button>
              </div>
              <div className="flex items-center">
                <span>Video</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="flex items-center ml-auto focus:outline-none bg-gray-200 rounded-full px-4 py-2"
                >
                  <span className="sr-only">Toggle</span>
                  <AiOutlineCheckSquare size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900">Multiple Choice</span>
            <div className="flex space-y-2 mt-2">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                className="flex items-center justify-between focus:outline-none bg-gray-200 rounded-full px-4 py-2"
              >
                <AiOutlineCheckSquare size={16} />
                <FiChevronDown size={16} />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900">Settings</span>
            <div className=" space-y-2 mt-2">
              <div className="flex items-center">
                <span>Required</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="flex items-center ml-auto focus:outline-none bg-gray-200 rounded-full px-4 py-2"
                >
                  <span className="sr-only">Toggle</span>
                  <AiOutlineCheckSquare size={16} />
                </button>
              </div>
              <div className="flex items-center">
                <span>Shuffle</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="flex items-center ml-auto focus:outline-none bg-gray-200 rounded-full px-4 py-2"
                >
                  <span className="sr-only">Toggle</span>
                  <AiOutlineCheckSquare size={16} />
                </button>
              </div>
              <div className="flex items-center">
                <span>Partial credit</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="flex items-center ml-auto focus:outline-none bg-gray-200 rounded-full px-4 py-2"
                >
                  <span className="sr-only">Toggle</span>
                  <AiOutlineCheckSquare size={16} />
                </button>
              </div>
              <div className="flex items-center">
                <span>Answer rationales</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="flex items-center ml-auto focus:outline-none bg-gray-200 rounded-full px-4 py-2"
                >
                  <span className="sr-only">Toggle</span>
                  <AiOutlineCheckSquare size={16} />
                </button>
              </div>
              <div className="flex items-center">
                <span>Hints</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="flex items-center ml-auto focus:outline-none bg-gray-200 rounded-full px-4 py-2"
                >
                  <span className="sr-only">Toggle</span>
                  <AiOutlineCheckSquare size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center justify-between focus:outline-none bg-gray-200 rounded-full px-4 py-2"
            >
              <FiHelpCircle size={16} />
              <span>Advanced Settings</span>
              <FiChevronDown size={16} />
            </button>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              aria-label="Add question"
              className="flex items-center focus:outline-none bg-gray-200 rounded-full px-4 py-2"
            >
              <AiOutlinePlus size={16} />
              <span>Add question</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarD;

const categories = [
    {
      id: '1', // Unique key for category
      name: 'Recommended',
      items: [
        { id: '1-1', label: 'Short Text', bgColor: 'bg-blue-100' },
        { id: '1-2', label: 'Multiple Choice', bgColor: 'bg-purple-100' },
        { id: '1-3', label: 'Statement', bgColor: 'bg-gray-100' },
        { id: '1-4', label: 'Opinion Scale', bgColor: 'bg-green-100' },
        { id: '1-5', label: 'Email', bgColor: 'bg-yellow-100' },
      ],
    },
    {
      id: '2', // Unique key for category
      name: 'Contact Info',
      items: [
        { id: '2-1', label: 'Contact Info', bgColor: 'bg-yellow-100' },
        { id: '2-2', label: 'Email', bgColor: 'bg-yellow-100' },
        { id: '2-3', label: 'Phone Number', bgColor: 'bg-yellow-100' },
        { id: '2-4', label: 'Address', bgColor: 'bg-yellow-100' },
        { id: '2-5', label: 'Website', bgColor: 'bg-yellow-100' },
      ],
    },
    {
      id: '3', // Unique key for category
      name: 'Choice',
      items: [
        { id: '3-1', label: 'Multiple Choice', bgColor: 'bg-purple-100' },
        { id: '3-2', label: 'Dropdown', bgColor: 'bg-purple-100' },
        { id: '3-3', label: 'Picture Choice', bgColor: 'bg-purple-100' },
        { id: '3-4', label: 'yes_no', bgColor: 'bg-purple-100' },
        { id: '3-5', label: 'Legal', bgColor: 'bg-purple-100' },
      ],
    },
    {
      id: '4', // Unique key for category
      name: 'Rating & Ranking',
      items: [
        { id: '4-1', label: 'Net Promoter Score', bgColor: 'bg-green-100' },
        { id: '4-2', label: 'Opinion Scale', bgColor: 'bg-green-100' },
        { id: '4-3', label: 'Rating', bgColor: 'bg-green-100' },
        { id: '4-4', label: 'Ranking', bgColor: 'bg-green-100' },
        { id: '4-5', label: 'Matrix', bgColor: 'bg-green-100' },
      ],
    },
    {
      id: '5', // Unique key for category
      name: 'Text',
      items: [
        { id: '5-1', label: 'Long Text', bgColor: 'bg-blue-100' },
        { id: '5-2', label: 'Short Text', bgColor: 'bg-blue-100' },
        { id: '5-3', label: 'Video', bgColor: 'bg-orange-100', isPremium: true },
      ],
    },
    {
      id: '6', // Unique key for category
      name: 'Other',
      items: [
        { id: '6-1', label: 'Number', bgColor: 'bg-yellow-100' },
        { id: '6-2', label: 'Date', bgColor: 'bg-yellow-100' },
        { id: '6-3', label: 'Payment', bgColor: 'bg-yellow-100', isPremium: true },
        { id: '6-4', label: 'File Upload', bgColor: 'bg-yellow-100', isPremium: true },
        { id: '6-5', label: 'Google Drive', bgColor: 'bg-yellow-100', isPremium: true },
        { id: '6-6', label: 'Calendly', bgColor: 'bg-yellow-100' },
      ],
    },
    {
      id: '7', // Unique key for category
      name: 'Welcome Screen',
      items: [
        { id: '7-1', label: 'Welcome Screen', bgColor: 'bg-gray-100' },
        { id: '7-2', label: 'Statement', bgColor: 'bg-gray-100' },
        { id: '7-3', label: 'Question Group', bgColor: 'bg-gray-100' },
        { id: '7-4', label: 'Multi Question Page', bgColor: 'bg-gray-100' },
        { id: '7-5', label: 'End Screen', bgColor: 'bg-gray-100' },
        { id: '7-6', label: 'Redirect to URL', bgColor: 'bg-gray-100', isPremium: true },
      ],
    },
  ];
  
  export default categories;
  
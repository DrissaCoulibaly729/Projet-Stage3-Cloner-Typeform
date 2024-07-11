import { AiOutlineCheckSquare, AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const SidebarD = () => {
  return (
    <div className="flex flex-col w-64 border-l-2 bg-gray-100 p-5 box-border">
      <div className="flex flex-col space-y-4">
        {/* Onglets */}
        <div className="flex flex-col">
          <button
            id="sidebar:question"
            role="tab"
            aria-controls="sidebar:question"
            aria-selected="true"
            className="text-base p-2 focus:outline-none"
          >
            Content
          </button>
          <button
            id="sidebar:design"
            role="tab"
            aria-controls="sidebar:design"
            aria-selected="false"
            className="text-base p-2 focus:outline-none"
          >
            Design
          </button>
          <button
            id="sidebar:logic"
            role="tab"
            aria-controls="sidebar:logic"
            aria-selected="false"
            className="text-base p-2 focus:outline-none"
          >
            <div className="flex items-center">
              <div className="text-gray-900">Logic</div>
            </div>
          </button>
          <button
            id="sidebar:settings"
            role="tab"
            aria-controls="sidebar:settings"
            aria-selected="false"
            className="text-base p-2 focus:outline-none"
          >
            <AiOutlineSetting size={14} className="text-gray-900" />
          </button>
        </div>

        {/* Options sous chaque onglet */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <div className="text-gray-900">Question</div>
            <div className="flex space-x-2">
              <input
                type="button"
                role="radio"
                aria-checked="true"
                className="flex items-center p-2 focus:outline-none"
                tabIndex="-1"
              />
                <AiOutlineCheckSquare size={16} />
                Text
              <input
                type="button"
                role="radio"
                aria-checked="false"
                className="flex items-center p-2 focus:outline-none"
                tabIndex="-1"
              />
                <AiOutlineCheckSquare size={16} />
                Video
            </div>
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center justify-between p-2 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <AiOutlineCheckSquare size={16} />
                <span>Multiple Choice</span>
              </div>
              <FiChevronDown size={16} />
            </button>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-900">Settings</div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="radix-84" className="flex items-center space-x-2">
                  <div className="text-gray-900">Required</div>
                </label>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  id="radix-84"
                  className="flex items-center focus:outline-none"
                >
                  <span className="text-gray-900"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="radix-85" className="flex items-center space-x-2">
                  <div className="text-gray-900">Shuffle</div>
                </label>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  id="radix-85"
                  className="flex items-center focus:outline-none"
                >
                  <span className="text-gray-900"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="radix-86" className="flex items-center space-x-2">
                  <div className="text-gray-900">Partial credit</div>
                </label>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  id="radix-86"
                  className="flex items-center focus:outline-none"
                >
                  <span className="text-gray-900"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="radix-87" className="flex items-center space-x-2">
                  <div className="text-gray-900">Answer rationales</div>
                </label>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  id="radix-87"
                  className="flex items-center focus:outline-none"
                >
                  <span className="text-gray-900"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="radix-88" className="flex items-center space-x-2">
                  <div className="text-gray-900">Hints</div>
                </label>
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  id="radix-88"
                  className="flex items-center focus:outline-none"
                >
                  <span className="text-gray-900"></span>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                className="flex items-center justify-between p-2 focus:outline-none"
              >
                <div className="flex items-center space-x-2">
                  <FiHelpCircle size={16} />
                  <span>Advanced Settings</span>
                </div>
                <FiChevronDown size={16} />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              aria-label="Add question"
              className="flex items-center p-2 focus:outline-none"
            >
              <AiOutlinePlus size={16} />
              Add question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarD;

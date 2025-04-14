import { IoIosSend } from 'react-icons/io';
import { UseChatAppContext } from '../../context/chatAppProvider';
import { Themes } from '../constants/constants';

const Preview = [
  {
    id: 1,
    content: 'عامل ايه يسطا',
    isSent: false,
  },
  {
    id: 2,
    content: 'الحمدلله ي غالي بخير وانت ازيك وازي العائله الكريمه',
    isSent: true,
  },
];
const SettingsContent = () => {
  const { theme, setTheme } = UseChatAppContext();
  return (
    <div className="container mx-auto h-screen max-w-5xl px-4 pt-20">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="fontino text-lg font-semibold">Themes</h2>
          <p className="fontino text-base-content/70 text-sm">
            Choose a Theme for your chat interface
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {Themes.map((item) => (
            <div className="flex flex-col gap-4" key={item.name}>
              <div className="flex items-center gap-2">
                <input
                  id={`theme-${item.value}`}
                  type="radio"
                  name="theme"
                  value={item.value}
                  checked={item.value === theme}
                  onChange={() => setTheme(item.value)}
                />
                <label htmlFor={`theme-${item.value}`}>{item.name}</label>
              </div>
              <div>
                <div
                  className="relative h-8 w-full overflow-hidden rounded-md"
                  data-theme={item.value}
                >
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="bg-primary rounded"></div>
                    <div className="bg-secondary rounded"></div>
                    <div className="bg-accent rounded"></div>
                    <div className="bg-neutral rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mb-3 text-lg font-semibold">Preview</h3>
        <div className="border-base-300 bg-base-100 overflow-hidden rounded-xl border shadow-lg">
          <div className="bg-base-300 p-4">
            <div className="mx-auto max-w-lg">
              <div className="bg-base-100 overflow-hidden rounded-xl shadow-sm">
                <div className="border-base-300 bg-base-100 border-b px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-content flex h-8 w-8 items-center justify-center rounded-full font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Amr Waheed</h3>
                      <p className="text-base-content/70 text-xs">online</p>
                    </div>
                  </div>
                </div>
                <div className="bg-base-100 min-h-[200px] space-y-4 overflow-y-auto p-4">
                  {Preview.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl p-3 shadow-sm ${message.isSent ? 'bg-primary text-primary-content' : 'bg-base-200'}`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`mt-1.5 text-[10px] ${message.isSent ? 'text-primary-content/70' : 'text-base-content/70'}`}
                        >
                          10.30am
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-base-300 bg-base-100 border-t p-4">
                  <div className="flex gap-2">
                    <input
                      placeholder="Type a Message"
                      value="This is a Fuckin Preview"
                      className="input input-bordered h-10 flex-1 text-sm focus:outline-none"
                      type="text"
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <IoIosSend size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;

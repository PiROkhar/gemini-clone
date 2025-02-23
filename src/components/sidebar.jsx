import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Context } from '../context/context';

const Sidebar = () => {
    const [extended, setExtended] = useState(true);
    const { onSent, prevPrompts = [], setRecentPrompt, newChat } = useContext(Context);

    // Remove duplicates from prevPrompts
    const uniquePrompts = [...new Set(prevPrompts)];

    const loadPrompt = async (prompt) => {
        try {
            // Avoid reloading if it's the current prompt
            setRecentPrompt(prompt);
            await onSent(prompt);
        } catch (error) {
            console.error("Error loading prompt:", error);
        }
    };

    const handleClick = () => {
        setExtended(!extended);
    };

    return (
        <div className={`sidebar bg-[#1E1E1E] h-[100vh] flex flex-col justify-between p-3 card text-[#e0e0e0] ${extended ? "w-[250px]" : "w-16"}`}>
            {/* Top Section */}
            <div className='top flex flex-col gap-4'>
                <img
                    className='size-8 p-1 rounded-md hover:bg-zinc-300 cursor-pointer'
                    onClick={handleClick}
                    src={assets.menu_icon}
                    alt="Menu"
                />

                <div
                    className='flex gap-2 items-center border border-zinc-800 justify-center bg-zinc-700 rounded-full p-2 hover:bg-zinc-900 cursor-pointer'
                    onClick={() => newChat()}
                >
                    <img className='size-4' src={assets.plus_icon} alt="New Chat" />
                    {extended && <span>New Chat</span>}
                </div>

                <div className='recent flex flex-col'>
                    {extended && <h3 className='font-semibold'>Recent</h3>}
                    {uniquePrompts.map((item, index) => (
                        <div
                            key={index}
                            className='flex gap-2 items-center p-2 rounded-md hover:bg-zinc-700 cursor-pointer'
                            onClick={() => loadPrompt(item)}
                        >
                            <img className='size-6' src={assets.message_icon} alt="Message" />
                            {extended && <p>{item.slice(0, 15)}...</p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className='bottom gap-2 flex flex-col'>
                <div className='question flex gap-2 items-center p-2 rounded-md hover:bg-zinc-300 cursor-pointer'>
                    <img className='size-6' src={assets.question_icon} alt="Questions" />
                    {extended && <span>Questions</span>}
                </div>

                <div className='history flex gap-2 items-center p-2 rounded-md hover:bg-zinc-300 cursor-pointer'>
                    <img className='size-6' src={assets.history_icon} alt="History" />
                    {extended && <span>History</span>}
                </div>

                <div className='settings flex gap-2 items-center p-2 rounded-md hover:bg-zinc-300 cursor-pointer'>
                    <img className='size-6' src={assets.setting_icon} alt="Settings" />
                    {extended && <span>Settings</span>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

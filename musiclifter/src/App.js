import { useState } from "react";
import "./App.css";
import axios from 'axios'
import OpenAI from 'openai';
import logo from './logo.jpeg';
import { getAnswerFromAI } from "./Requests/OpenAIRequests";


function App() {
  
  const [prompt, setPrompt] = useState("");
  const [answer , setAnswer] = useState("Your song recommendation will show up here...") 
  const formattedAnswer = answer.replace(/\n/g, '<br>');
  async function getAnswer(prompt){
    const c = await getAnswerFromAI(prompt);
    setAnswer(c);
  } 

  return (
    
      <div className="h-screen mt-auto col-span-4">
        <div className="grid grid-cols-10">
          <div className="col-span-10 pt-10 justify-self-center items-center">
            <h1 className="text-7xl text-slate-700 allura-regular">Harmony</h1>
          </div>
          <img
            className="col-span-10 pt-1 pb-20 justify-self-center w-1/3"
            src={logo}
          /> 
          <div></div>
          <div className="flex w-1/2 justify-self-center col-span-10 items-center px-3 py-2 rounded-lg">
            <span className = "block min-h-40 mx-4 p-2.5 w-full text-sm text-gray-900 bg-white resize-none rounded-lg border-2 border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " style={{ whiteSpace: 'pre-line'}}>{answer}</span>
          </div>

          <label className="sr-only">Speak your mind</label>
          <div className="flex w-1/2 justify-self-center col-span-10 items-center px-3 py-2 rounded-lg">
              <textarea 
                onChange={(event) => setPrompt(event.target.value)}
                id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border-2 border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Speak your mind..."></textarea>
                  <button 
                    onClick={() => getAnswer(prompt)}
                    type="submit" className="inline-flex justify-center p-2 text-slate-800 rounded-full cursor-pointer hover:bg-slate-300 dark:text-slate-500 dark:hover:bg-gray-600">
                  <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                  </svg>
                  <span className="sr-only">Send message</span>
              </button>
          </div>
          

      </div>
    </div>
  );
}


export default App;

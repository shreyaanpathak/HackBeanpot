import { openai } from "./configai";

async function getAnswer(prompt){
    const add = "You are a helpful, encouraging and warm assistant. Based on this conversation: '"+prompt+"' First give a warm response (and dont mention response) back and then give the top 3 song recommendations you would give for music therapy. Please add a small description of the meaning of the song as well";
    try{
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: (add)}],
        max_tokens: 1000,
      })
      console.log(completion.choices[0].message.content);
      console.log(prompt);
      return (completion.choices[0].message.content);
    }catch(error){
      console.log(error);
      return error;
    }
  }

  export async function getAnswerFromAI(prompt){
    const c = await getAnswer(prompt);
    return c;
  }
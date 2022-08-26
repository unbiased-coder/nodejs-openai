const { Configuration, OpenAIApi } = require("openai");

const openAIConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openAIEngine = new OpenAIApi(openAIConfig);
const openAIModel = 'text-davinci-002';

const questionToAsk1 = 'Who is Nikola Tesla?';
const questionToAsk2 = 'When was Nikola Tesla born?';

async function 
sendOpenAICommand(command: string)
{
    let res;

    console.log('Asking OpenAI: ', command);

    res = await openAIEngine.createCompletion({
        model: openAIModel,
        prompt: command
    });

    return res.data.choices[0].text;
}

(async () => {
    let res: string;
    
    res = await sendOpenAICommand(questionToAsk1);
    console.log(res);

    res = await sendOpenAICommand(questionToAsk2);
    console.log(res);
})();

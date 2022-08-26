const { Configuration, OpenAIApi } = require("openai");

const openAIConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openAIEngine = new OpenAIApi(openAIConfig);
const openAIModel = 'text-davinci-002';

const topic = 'Nuclear Fusion';
const title = 'Methodologies for nuclear fusion';

async function 
openAIgenerateHeadings(topic: string): Promise<string>
{
    let res;

    console.log('Generating headings on: ', topic);
    res = await sendOpenAICommand('Generate headings on: '+topic);

    return res;
}

async function 
openAIgenerateParagraph(title: string): Promise<string>
{
    let res;

    console.log('Generate paragraphs on: ', title);
    res = await sendOpenAICommand('Write an essey on: '+title);
    
    return res;
}

async function 
sendOpenAICommand(command: string): Promise<string>
{
    let res;

    res = await openAIEngine.createCompletion({
        model: openAIModel,
        prompt: command,
        max_tokens: 1024
    });

    return res.data.choices[0].text;
}

(async () => {
    let res: string;
    
    res = await openAIgenerateHeadings(topic);
    console.log(res);

    res = await openAIgenerateParagraph(title);
    console.log(res);
})();

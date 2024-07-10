const paragraphs=[
    'The Wonders of Space Exploration: Space exploration has always been a captivating endeavor for humanity. From the first steps on the moon to the exploration of Mars, each mission has expanded our understanding of the universe. The vastness of space holds countless mysteries, and with each new discovery, we gain a deeper appreciation of our place in the cosmos.',

'The Beauty of Nature: Natures beauty is unparalleled, from the majestic mountains to the serene beaches. The diversity of flora and fauna showcases the intricate balance of ecosystems. Whether it s a hike through a dense forest or a stroll in a park, nature has a way of rejuvenating our spirits and reminding us of the worlds splendor.',

'The Importance of Education**: Education is the foundation of a prosperous society. It empowers individuals with knowledge, skills, and critical thinking abilities. A well-rounded education system promotes creativity, innovation, and inclusivity, preparing future generations to tackle global challenges and contribute positively to the world.',

'The Impact of Technology on Society**: Technology has revolutionized the way we live, work, and interact. From smartphones to artificial intelligence, technological advancements have improved our quality of life. However, they also pose ethical and privacy concerns, making it crucial to balance innovation with responsibility.',

'The Joy of Cooking: Cooking is not just about preparing food its an art form that brings people together. Experimenting with different ingredients and techniques can be a delightful experience. Sharing a meal with loved ones fosters connections and creates lasting memories, making cooking a truly rewarding activity.',

'The Power of Music: Music has a unique ability to evoke emotions and transcend cultural boundaries. It can uplift spirits, provide comfort, and inspire creativity. From classical compositions to modern pop songs, music is a universal language that connects people and enriches our lives.',

'The Significance of Mental Health: Mental health is an integral part of overall well-being. Recognizing and addressing mental health issues is essential for leading a balanced life. Societys growing awareness and acceptance of mental health challenges are paving the way for better support systems and reducing stigma.',

'The Evolution of Fashion: Fashion is a dynamic and ever-evolving industry. It reflects cultural shifts, social trends, and individual expressions. From haute couture to streetwear, fashion allows people to showcase their personality and creativity, making it an influential aspect of human culture.',

'The Role of Sports in Society: Sports play a crucial role in promoting physical fitness, teamwork, and discipline. They bring communities together and provide a sense of identity and pride. Whether its a local game or an international event, sports have the power to unite people and inspire greatness.',

'The Art of Storytelling: Storytelling is an ancient tradition that continues to captivate audiences. Through stories, we can explore different perspectives, learn valuable lessons, and connect with others. Whether written, spoken, or visual, storytelling is a powerful tool for communication and creativity.',

'The Importance of Environmental Conservation: Protecting the environment is vital for sustaining life on Earth. Conservation efforts aim to preserve natural resources, reduce pollution, and combat climate change. By adopting sustainable practices, we can ensure a healthier planet for future generations.',

'The Magic of Travel: Traveling allows us to experience new cultures, cuisines, and landscapes. It broadens our horizons and fosters a deeper understanding of the world. Each journey is an opportunity for adventure, learning, and personal growth, making travel a truly enriching experience.',

'The Influence of Literature: Literature has the power to shape minds and societies. It reflects the human condition, explores complex themes, and challenges our perceptions. From classic novels to contemporary works, literature is a testament to the enduring power of the written word.',

'The Benefits of Physical Exercise: Regular physical exercise is essential for maintaining good health. It boosts the immune system, improves mental well-being, and enhances overall quality of life. Incorporating physical activity into daily routines can lead to a happier and healthier lifestyle.',

'The Rise of Digital Media: Digital media has transformed the way we consume information and entertainment. Social media platforms, streaming services, and online news have become integral parts of our lives. This digital revolution has democratized content creation and access, shaping modern culture and communication.',

'The Ethics of Artificial Intelligence: As artificial intelligence advances, ethical considerations become increasingly important. Issues like data privacy, algorithmic bias, and job displacement need to be addressed. Ensuring that AI is developed and deployed responsibly is crucial for its positive impact on society.',

'The Legacy of Ancient Civilizations: Ancient civilizations, such as the Egyptians, Greeks, and Mayans, have left a lasting legacy on modern society. Their achievements in art, science, and architecture continue to inspire and influence contemporary culture. Studying these civilizations provides valuable insights into human history and progress.',

'The Dynamics of Human Relationships: Human relationships are complex and multifaceted. They involve emotions, communication, and shared experiences. Healthy relationships are built on trust, respect, and understanding, and they play a significant role in our happiness and well-being.',

'The Quest for Knowledge: The pursuit of knowledge is a fundamental human drive. Whether through formal education, scientific research, or personal exploration, acquiring knowledge enriches our lives and fuels progress. The quest for understanding and discovery is a cornerstone of human civilization.',

'The Future of Work: The world of work is rapidly changing due to technological advancements and shifting societal norms. Remote work, gig economies, and automation are redefining traditional job structures. Adapting to these changes requires flexibility, continuous learning, and a forward-thinking mindset to thrive in the future workforce.'
];
const item=document.getElementById("items");
const dataContainer=document.getElementById("data");

function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex!=0){
        randomIndex=Math.floor(Math.random()*currentIndex);
        currentIndex--;

        [array[currentIndex],array[randomIndex]]=[
            array[randomIndex],array[currentIndex]
        ];
    }
    return array;

}
function generate(){
    if(item.value==0){
        alert("The value cannot be zero");
    }else if(item.value >paragraphs.length){
        const randomIndex =Math.floor(Math.random()*paragraphs.length);
        dataContainer.innerHTML=`${paragraphs[randomIndex]}`;
    }else{
        const shuffleParagraphs= paragraphs;
        shuffle(paragraphs);

        const selectedParagraphs =shuffleParagraphs.slice(0,item.value);
        const paragraphsHTML=selectedParagraphs.map(paragraphs=>`<p>${paragraphs}</p>`).join("");

        dataContainer.innerHTML=paragraphsHTML;
    }
}
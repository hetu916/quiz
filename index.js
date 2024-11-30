
const QuizeData = [

    {
        question: "what doeshtml stand for?",
        options: [
            "hyper text markup laungauge",
            "hyper text transfer language",
            "hyper text miss language",
            "hyper text unique lanuage",
        ],
        correct: 0,
    },
    {
        question: "what doeshtml stand for1?",
        options: [
            "hyper text markup laungauge",
            "hyper text transfer language",
            "hyper text miss language",
            "hyper text unique lanuage",
        ],
        correct: 2,
    },
    {
        question: "what doeshtml stand for3?",
        options: [
            "hyper text markup laungauge",
            "hyper text transfer language",
            "hyper text miss language",
            "hyper text unique lanuage",
        ],
        correct: 0,
    },
    {
        question: "what doeshtml stand for5?",
        options: [
            "hyper text markup laungauge",
            "hyper text transfer language",
            "hyper text miss language",
            "hyper text unique lanuage",
        ],
        correct: 1,
    },
    {
        question: "what doeshtml stand for9?",
        options: [
            "hyper text markup laungauge",
            "hyper text transfer language",
            "hyper text miss language",
            "hyper text unique lanuage",
        ],
        correct: 0,
    },
];
const Quize=document.querySelector('#quize');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4,] = document.querySelectorAll("#question, .option_1,.option_2,.option_3,.option_4");
const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;
const loadQuiz = () => {
    const { question, options } = QuizeData[currentQuiz];
    console.log(question);
    questionElm.innerText = question;
    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );

};
loadQuiz();
const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if (curOption.checked) {
    //         ans_index = index;
    //     }
    // });
    // return ans_index;

    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};
const deselectedAnswers = () => {
    return answerElm.forEach((curElem) => curElem.checked = false);
};
submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === QuizeData[currentQuiz].correct) {
        score = score + 1;
    }
    currentQuiz++;

    if (currentQuiz < QuizeData.length) {
        deselectedAnswers();
        loadQuiz();
    } else {
        Quize.innerHTML = `<div class="result">
        
        <h2>your score:${score}/${QuizeData.length}correct answers<h2/>
        <P>Congractulations on completing the quize!!<P/>
        <button class="reload-button btn btn-light " type="button"onclick="location.reload()">play again<button/>
        <div/>`;
    }

});
//alert ("hii hetal ");
//console.log("ryrtjytjt");

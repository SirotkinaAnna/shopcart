import NavBar from "./components/navigation";
import Carousel from "./components/Carousel";
import ItemInfo from "./components/ItemInfo";
import CarouselBig from "./components/CarouselBig";

import CarouselInner from "./components/carouselInner";

import { useState } from "react";
function App() {
    const [MyDiv, setDiv] = useState(false);

    const [count, setCount] = useState(0);
    const handleCarouselClick = () => {
        setDiv(!MyDiv)
    }
    const [sum, setSum] = useState(0);
    const handleDelete = () => {
        setSum(0);
        setCount(0);
    }

    // const [sum, setSum] = useState(0);
    const handleClickPlus = () => {
        setCount(count + 1)
    }
    const handleClickMinus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        else setCount(0)
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        const newSum = sum + count;
        setSum(newSum);


    }
    return <div className="myContainer">
        {MyDiv && <CarouselBig click={handleCarouselClick} />}
        <div className="container">
            <NavBar sum={sum} handleDelete={handleDelete} />
            <div className="container mb-3  my-md-5 pt-md-5" role="main" id="main">
                <div className="row d-flex flex-column flex-md-row">
                    <div className="col mx-md-4">
                        <div className="d-md-none"><CarouselInner /></div>
                        <Carousel click={handleCarouselClick} MyDiv={MyDiv} />

                    </div>
                    <div className="col justify-content-center mt-5">
                        <ItemInfo sum={sum}
                            setSum={setSum}
                            count={count}
                            handleButtonClick={handleButtonClick}
                            minus={handleClickMinus}
                            plus={handleClickPlus}
                        /></div>
                </div>
            </div></div>
        <div className="attribution" role="contentinfo">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
            Coded by <a href="https://github.com/SirotkinaAnna/">Anna Sirotkina</a>.
        </div>
    </div>
}
export default App;
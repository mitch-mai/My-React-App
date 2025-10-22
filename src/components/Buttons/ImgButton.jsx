/*
import {useState} from 'react';

export default function ImgButton({imgSrc, altText = "Button Image"}) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <button
            onClick={() => setIsClicked(!isClicked)}
            className={`p-2 rounded-md transition ${
                isClicked ? 'bg-green-600' : 'bg-gray-300'
            }`}
        >
            <img src={imgSrc} alt={altText} className="w-6 h-6" />
        </button>
    );
}
*/
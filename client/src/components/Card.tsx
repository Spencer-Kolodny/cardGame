import type { Suit } from "../types/Suit";
import { useRef } from "react";

function Card({ suit, rank, backside }: { suit: Suit, rank: number, backside?: boolean }) {
    const imgRef = useRef<HTMLImageElement>(null);

    // Handler to set drag data and custom drag image
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("application/card", JSON.stringify({ suit, rank }));
        if (imgRef.current) {
            e.dataTransfer.setDragImage(imgRef.current, imgRef.current.width / 2, imgRef.current.height / 2);
        }
    };

    return (
        <div
            draggable={!backside}
            onDragStart={handleDragStart}
            style={{ cursor: backside ? "default" : "grab", display: "inline-block" }}
        >
            <img
                ref={imgRef}
                src={backside ? '/cards/back.png' : `/cards/${rank}_of_${suit}.svg`}
                alt={`${suit} ${rank}`}
                width={80}
                height={120}
            />
        </div>
    );
}

export default Card;
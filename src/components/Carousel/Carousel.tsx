import s from "./style.module.scss";
import json from "../../assets/json/projects.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

interface Project {
    id: number;
    title: string;
    images: { url: string }[];
}

interface Params extends Record<string, string | undefined> {
    id: string;
}

export function Carousel() {
    const { id } = useParams<Params>();
    const currentItem = json.find((item: Project) => item.id === Number(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const photos = currentItem ? currentItem.images.map((image) => image.url) : [];

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const nextImage = () => {
        setCurrentImageIndex((index) =>
            index === photos.length - 1 ? 0 : index + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((index) =>
            index === 0 ? photos.length - 1 : index - 1
        );
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return;

        const distance = touchStart - touchEnd;
        const threshold = 50; // Minimum distance for a swipe to be recognized

        if (distance > threshold) {
            nextImage(); // Swipe left to go to the next image
        } else if (distance < -threshold) {
            prevImage(); // Swipe right to go to the previous image
        }

        // Reset touch coordinates
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div
            className={s.carousel_container}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <img
                className={s.carousel_housing}
                src={photos[currentImageIndex]}
                alt={currentItem ? currentItem.title : 'Image'}
            />

            {photos.length > 1 && (
                <>
                    <button className={s.left_button} onClick={prevImage}>
                        <i className="fa-solid fa-chevron-left fa-2xl"></i>
                    </button>
                    <p className={s.current_slide}>
                        {currentImageIndex + 1} / {photos.length}
                    </p>
                    <button className={s.right_button} onClick={nextImage}>
                        <i className="fa-solid fa-chevron-right fa-2xl"></i>
                    </button>
                </>
            )}
        </div>
    );
}

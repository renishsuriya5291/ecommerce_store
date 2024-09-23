import { useState, useEffect } from "react";
import Card from "../Components/Card"; // Import Card
import CardContent from "../Components/CardContent"; // Import CardContent
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Content Writing",
    description: "Engage your community",
    image: "/c-1.webp",
  },
  {
    title: "SEO",
    description: "Boost your traffic",
    image: "/c-2.webp",
  },
  {
    title: "Website Development",
    description: "Build your site",
    image: "/c-3.webp",
  },
  {
    title: "Logo Design",
    description: "Elevate your brand",
    image: "/c-4.webp",
  },
  {
    title: "Voice-over",
    description: "Tell your story",
    image: "/c-5.webp",
  },
  {
    title: "Illustration Drawing",
    description: "Picture your idea",
    image: "/c-6.webp",
  },
];

export default function CategorySlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); // Default
  const totalItems = categories.length;

  const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setItemsToShow(1); // Small screens show 1 item
    } else if (width < 768) {
      setItemsToShow(2); // Medium screens show 2 items
    } else {
      setItemsToShow(4); // Large screens show 4 items
    }
  };

  useEffect(() => {
    updateItemsToShow(); // Initial check
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full container bg-white mx-auto px-4 pb-16">
      <div className="flex justify-between items-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-4xl font-semibold">
          Most Popular Categories
        </h2>
        <div className="flex gap-2">
          <button onClick={prevSlide} className="p-2 border rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="p-2 border rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 gap:2 sm:gap-4"
          style={{
            transform: `translateX(-${(startIndex * 100) / itemsToShow}%)`,
          }}
        >
          {/* Duplicate categories for seamless looping */}
          {categories.slice(-itemsToShow).map((category, index) => (
            <Card
              key={`prev-${index}`}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <CardContent className="p-0">
                <div
                  className="relative h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                    <p className="text-sm">{category.description}</p>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {categories.map((category, index) => (
            <Card
              key={`current-${index}`}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <CardContent className="p-0">
                <div
                  className="relative h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                    <p className="text-sm">{category.description}</p>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

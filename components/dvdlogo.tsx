import { AnimatePresence, motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";

// Credit to cnrad (https://github.com/cnrad) for the code on which this is based
const DVDLogo = () => {
  const imageRef = useRef(null);
  const [start, setStart] = useState(true);
  const [imgSrc, setImgSrc] = useState("/svgs/DVDlogo.svg");
  const [colorChanging, setColorChanging] = useState(true);

  const frameWidth = useRef(100);
  const frameHeight = useRef(100);
  const speed = useRef(2.5);

  const resizeWindow = () => {
    frameWidth.current = window.innerWidth;
    frameHeight.current = window.innerHeight;
  };

  useEffect(() => {
    frameWidth.current = window.innerWidth;
    frameHeight.current = window.innerHeight;

    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  let currentY = 0;
  let currentX = 0;
  let directionX = "right";
  let directionY = "down";

  let colorArr = ["red", "blue", "green", "yellow", "purple"];

  const changeColor = () => {
    if (colorChanging === false) return;
    let choice = Math.floor(Math.random() * 6);
    (
      imageRef.current as unknown as HTMLImageElement
    ).style.filter = `opacity(0.1) drop-shadow(0 0 0.25px ${colorArr[choice]}) drop-shadow(0 0 0.25px ${colorArr[choice]}) drop-shadow(0 0 0.25px ${colorArr[choice]})`;
  };

  const moveImage = () => {
    let image = imageRef.current as unknown as HTMLImageElement;

    if (image !== null) {
      if (currentX <= 0) {
        directionX = "right";
        changeColor();
      }
      if (currentX >= frameWidth.current - image.clientWidth) {
        directionX = "left";
        changeColor();
      }
      image.style.left = currentX + "px";
      directionX === "right"
        ? (currentX += speed.current)
        : (currentX -= speed.current);

      if (currentY <= 0) {
        directionY = "down";
        changeColor();
      }
      if (currentY >= frameHeight.current - image.clientHeight) {
        directionY = "up";
        changeColor();
      }
      image.style.top = currentY + "px";
      directionY === "down"
        ? (currentY += speed.current)
        : (currentY -= speed.current);

      requestAnimationFrame(moveImage);
    }
  };

  useEffect(() => {
    start ? moveImage() : "";
  });

  useEffect(() => {
    sessionStorage.setItem("currentX", currentX.toString());
    sessionStorage.setItem("currentY", currentY.toString());
    sessionStorage.setItem("directionX", directionX);
    sessionStorage.setItem("directionY", directionY);
  }, [currentX, currentY, directionX, directionY]);

  return (
    <div id="dvdcanvas" className="absolute top-0 left-0 w-screen h-screen">
      <motion.img
        id="dvdlogo"
        ref={imageRef}
        src={imgSrc}
        className="absolute top-0 left-0 w-auto h-[20vh]"
      />
    </div>
  );
};

export default DVDLogo;

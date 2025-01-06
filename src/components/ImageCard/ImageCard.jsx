
const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div>
      <img onClick={onClick} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
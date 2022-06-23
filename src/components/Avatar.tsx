import "./Avatar.css";
import beauty from "../assets/avatars/beauty.webp";
import biker from "../assets/avatars/biker.webp";
import birdKeeper from "../assets/avatars/bird-keeper.webp";
// import beauty from "../assets/avatars/beauty.webp";
// import beauty from "../assets/avatars/beauty.webp";
// import beauty from "../assets/avatars/beauty.webp";
// import beauty from "../assets/avatars/beauty.webp";
// import beauty from "../assets/avatars/beauty.webp";
interface Props {
  setAvatar: (a: string) => void;
  avatar: string;
}
const Avatar = ({ setAvatar, avatar }: Props) => {
  const avatars = [beauty, biker, birdKeeper];
  console.log(avatar);
  return (
    <ul className="Avatar">
      {avatars.map((image) => (
        <li
          className={image === avatar ? "selected" : ""}
          onClick={() => setAvatar(image)}
        >
          <img src={image} alt={image} />
        </li>
      ))}
    </ul>
  );
};

export default Avatar;

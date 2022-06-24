import "./Avatar.css";
import beauty from "../assets/avatars/beauty.webp";
import biker from "../assets/avatars/biker.webp";
import birdKeeper from "../assets/avatars/bird-keeper.webp";
import blackbelt from "../assets/avatars/blackbelt.webp";
import bugCatcher from "../assets/avatars/bug-catcher.webp";
import burglar from "../assets/avatars/burglar.webp";
import channeler from "../assets/avatars/channeler.webp";
import cooltrainerBoy from "../assets/avatars/cooltrainer-boy.webp";
import cooltrainerGirl from "../assets/avatars/cooltrainer-girl.webp";
import cueBall from "../assets/avatars/cue-ball.webp";
import engineer from "../assets/avatars/engineer.webp";
import fisherman from "../assets/avatars/fisherman.webp";
import gambler from "../assets/avatars/gambler.webp";
import gentleman from "../assets/avatars/gentleman.webp";
import hiker from "../assets/avatars/hiker.webp";
import jrTrainerBoy from "../assets/avatars/jr-trainer-boy.webp";
import jrTrainerGirl from "../assets/avatars/jr-trainer-girl.webp";
import juggler from "../assets/avatars/juggler.webp";
import lass from "../assets/avatars/lass.webp";
import playerAvatar from "../assets/avatars/player-avatar.webp";
import pokemaniac from "../assets/avatars/pokemaniac.webp";
import psychic from "../assets/avatars/psychic.webp";
import rocker from "../assets/avatars/rocker.webp";
import rocket from "../assets/avatars/rocket.webp";
import sailor from "../assets/avatars/sailor.webp";
import scientist from "../assets/avatars/scientist.webp";
import superNerd from "../assets/avatars/super-nerd.webp";
import swimmer from "../assets/avatars/swimmer.webp";
import tamer from "../assets/avatars/tamer.webp";
import youngster from "../assets/avatars/youngster.webp";

interface Props {
  setAvatar: (a: string) => void;
  avatar: string;
}

const Avatar = ({ setAvatar, avatar }: Props) => {
  const avatars = [
    beauty,
    biker,
    birdKeeper,
    blackbelt,
    bugCatcher,
    burglar,
    channeler,
    cooltrainerBoy,
    cooltrainerGirl,
    cueBall,
    engineer,
    fisherman,
    gambler,
    gentleman,
    hiker,
    jrTrainerBoy,
    jrTrainerGirl,
    juggler,
    lass,
    playerAvatar,
    pokemaniac,
    psychic,
    rocker,
    rocket,
    sailor,
    scientist,
    superNerd,
    swimmer,
    tamer,
    youngster,
  ];

  return (
    <ul className="Avatar">
      {avatars.map((image) => (
        <li onClick={() => setAvatar(image)}>
          <img
            className={image === avatar ? "selected" : ""}
            src={image}
            alt={image}
          />
        </li>
      ))}
    </ul>
  );
};

export default Avatar;

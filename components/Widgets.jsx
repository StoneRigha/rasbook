import { SearchIcon } from "@heroicons/react/solid";
import {
  DotsCircleHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import Contact from "../components/Contact";

const contacts = [
  {
    src: "https://avatars.githubusercontent.com/u/32543950?s=400&u=649a7bcec0ca51a59d8310643c3a5e7eb7f5fb86&v=4",
    name: "Livingstone Righa",
  },
  {
    name: "Felix Ivance",
    src: "https://avatars.githubusercontent.com/u/15850969?v=4",
  },
  {
    name: "David Milai",
    src: "https://avatars.githubusercontent.com/u/34280333?v=4",
  },
  {
    name: "Titto Mitto",
    src: "https://avatars.githubusercontent.com/u/29174832?v=4",
  },
  {
    name: "Brian Mutinda",
    src: "https://avatars.githubusercontent.com/u/68685699?v=4",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsCircleHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;

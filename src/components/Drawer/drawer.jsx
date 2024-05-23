// src/components/Drawer/NavDrawer.jsx
import React from "react";
// import { IconName } from "react-icons/gi";
import { GiAbstract050 } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Button
        style={{ marginTop: "8px" }}
        colorScheme="crimson"
        onClick={() => {
          console.log("Button clicked!"); // Add this for debugging
          onOpen();
        }}
      >
        <GiAbstract050  color="#CA385C" size={30}/>
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent bgColor="pink">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <button
              onClick={() => {
                navigate("AnimeAll");
                onClose();
              }}
              className="block w-full text-left p-2"
            >
              Anime
            </button>
            <button
              onClick={() => {
                navigate("MangaAll");
                onClose();
              }}
              className="block w-full text-left p-2"
            >
              Manga
            </button>
            <button
              onClick={() => {
                navigate("NovelAll");
                onClose();
              }}
              className="block w-full text-left p-2"
            >
              Novel
            </button>
            <button
              onClick={() => {
                navigate("About");
                onClose();
              }}
              className="block w-full text-left p-2"
            >
              About
            </button>
            <button
              onClick={() => {
                navigate("PrivacyPolicy");
                onClose();
              }}
              className="block w-full text-left p-2"
            >
              Privacy
            </button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavDrawer;

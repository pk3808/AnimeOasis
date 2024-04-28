import React from "react";
import { GiArmoredBoomerang } from "react-icons/gi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

function Modals({ animeItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sentences = animeItem.synopsis.split(". ");
  let limitedSynopsis = "";
  let wordCount = 0;

  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");
    if (wordCount + words.length <= 80) {
      limitedSynopsis += sentences[i] + ". ";
      wordCount += words.length;
    } else {
      break;
    }
  }

  const colors = [
    "#76D7C4",
    "#F1C40F",
    "#3498DB",
    "#EDBB99",
    "#95A5A6",
    "#EC7063",
    "#A9CCE3",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <Button backgroundColor="#FECBAA" onClick={onOpen}>
        <GiArmoredBoomerang />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent
            bg={`linear-gradient(to bottom, rgba(255, 245, 238, 0.8), #f3f1f4)`}
            maxW="650"
            mt="150"
            h="60%"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
            backdropFilter="blur( 8px )"
            borderRadius="10px"
        >
          <ModalBody
            // bgImage={animeItem.images.webp.large_image_url}
            w={"48%"}
            h={"96%"}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bg={`linear-gradient(to bottom, ${randomColor}, #f3f1f4)`}
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.8)"
            margin="10px"
            borderRadius="10px"
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"row"}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundImage: `url(${animeItem.images.webp.large_image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                position: "absolute",
                top: "8%",
                left: "26%",
                transform: "translateX(-50%)",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                borderWidth: "3px",
              }}
            />
            {/* <ModalBody h={"100%"} w={"50%"}  bgColor={"rgba(0, 0, 0, 0.1)"} position={"absolute"} top={0} left={0} ></ModalBody> */}
            <ModalHeader
              color={"#002D62 "}
              fontWeight={"bold"}
              fontSize={"14px"}
              position={"absolute"}
              // top={"28%"}
              marginTop={"18%"}
              w={"100%"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              {animeItem.title}
            </ModalHeader>
            <ModalHeader
              color={"black"}
              fontWeight={"bold"}
              fontSize={"14px"}
              position={"absolute"}
              marginTop={"24%"}
              w={"100%"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              {animeItem.title_japanese}
            </ModalHeader>
            <div style={{ position: "absolute", marginTop: "34%", display: "flex", flexWrap: "wrap", flexDirection:"row" ,justifyContent:"Center"}}>
              <h1 style={{fontSize:"10px", color:"black",borderRadius:"5px",padding:"5px",backgroundColor:randomColor, }}>Rating : {animeItem.score}</h1>
              <h1 style={{fontSize:"10px",marginLeft:"10px",marginRight:"10px", color:"black",borderRadius:"5px",padding:"5px",backgroundColor:randomColor }} >Staus : {animeItem.status}</h1>
              <h1 style={{fontSize:"10px", color:"black",borderRadius:"5px",padding:"5px",backgroundColor:randomColor, }}> Episodes : {animeItem.episodes}</h1>
            </div>
            <div style={{ position: "absolute",marginTop: "39%", display: "flex", flexWrap: "wrap", flexDirection:"row" ,justifyContent:"Center"}}>
              <h1 style={{fontSize:"10px",width:"30%", textAlign:"center",color:"black",borderRadius:"5px",padding:"5px",backgroundColor:randomColor, }}>Type : {animeItem.type}</h1>
              <h1 style={{fontSize:"10px", width:"50%",marginLeft:"10px",textAlign:"center",marginRight:"10px", color:"black",borderRadius:"5px",padding:"5px",backgroundColor:randomColor }} >Rank : {animeItem.rank}</h1>
              <h1 style={{fontSize:"10px", color:"black",borderRadius:"5px",padding:"5px",backgroundColor:randomColor,marginTop:"8px" }}> Source : {animeItem.source}</h1>
            </div>
            <div style={{marginRight:"10px",marginLeft:"10px", position: "absolute", marginTop: "50%", display: "flex", flexWrap: "wrap", flexDirection:"row" ,justifyContent:"Center",}}>
             <h1 style={{fontSize:"10px", color:"black",borderRadius:"5px",padding:"5px",borderColor:"black",borderWidth:"1px",marginBottom:"10px" }}>Genre : {animeItem.genres.map((genre) => genre.name).join(", ")}</h1>
             <h1 style={{fontSize:"10px", marginLeft:"10px",marginRight:"10px", color:"black",borderRadius:"5px",padding:"5px",borderColor:"black",borderWidth:"1px",  marginBottom:"10px"}}>Studio : {animeItem.studios.map((studio) => studio.name).join(", ")}</h1>
             <h1 style={{fontSize:"10px", color:"black",borderRadius:"5px",padding:"5px",borderColor:"black",borderWidth:"1px", marginBottom:"10px" }}>Duration: {animeItem.duration}</h1>
            </div>
          </ModalBody>

          <ModalBody h={"100%"} w={"100%"} display={"flex"} justifyContent={"center"}alignItems={"center"} overflowY="auto">
            <Text fontSize={"14px"}color={"black"} fontFamily={"serif"} fontWeight={"bold"}>" {limitedSynopsis} "</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modals;

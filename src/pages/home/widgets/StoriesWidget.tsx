import { Box, IconButton } from "@mui/material";
import Stories from "react-insta-stories";
import CloseIcon from "@mui/icons-material/Close";
import { Story } from "react-insta-stories/dist/interfaces";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import CircleStory from "../../../components/insta-story/CircleStory";



type StoriesWidgetProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  stories: Story[];
};

const StoriesWidget = ({
  open,
  handleClose,
  stories,
  handleOpen,
}: StoriesWidgetProps) => {
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndY.current = e.changedTouches[0].clientY;

    if (touchEndY.current - touchStartY.current > 100) {
      // Swipe down
      handleClose();
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={3}
        width={"99%"}
        sx={{
          scrollbarWidth: "none",
        }}
        overflow={"scroll"}
      >
        <CircleStory onOpen={handleOpen} poster={stories[0].url} />
        <CircleStory onOpen={handleOpen} poster={stories[0].url} />
        <CircleStory onOpen={handleOpen} poster={stories[0].url} />
        <CircleStory onOpen={handleOpen} poster={stories[0].url} />
        <CircleStory onOpen={handleOpen} poster={stories[0].url} />
        <CircleStory onOpen={handleOpen} poster={stories[0].url} />
      </Box>

      {open &&
        createPortal(
          <Box
            sx={{
              position: "fixed",
              zIndex: 1000,
              width: "100dvw",
              height: "100dvh",
              top: 0,
              left: 0,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "white",
                zIndex: 1001,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Stories
              stories={stories}
              defaultInterval={3000}
              width={"100dvw"}
              height={"100dvh"}
              onAllStoriesEnd={handleClose}
              storyStyles={{ objectFit: "cover", height: "100dvh" }}
            />
          </Box>,
          document.getElementById("modal-root") as HTMLElement
        )}
    </>
  );
};

export default StoriesWidget;

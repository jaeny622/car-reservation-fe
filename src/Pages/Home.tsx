import { useNavigate } from "react-router";

import { videoStore } from "../Stores/video.stores";
import { observer } from "mobx-react";
import { Video } from "../Types/video.types";

export default observer(function Home() {
  const navigate = useNavigate();
  const { videos } = videoStore;

  const handleClick = () => {
    navigate("video/upload");
  };

  const handleClickTitle = (id: string) => {
    navigate(`video/${id}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Upload</button>
      <div>
        {videos?.length === 0
          ? "No Vidoes"
          : videos.map((video: Video) => (
              <div key={video._id} onClick={() => handleClickTitle(video._id)}>
                {video.title}
              </div>
            ))}
      </div>
    </div>
  );
});

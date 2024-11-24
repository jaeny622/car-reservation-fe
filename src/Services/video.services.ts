import axios from "axios";
import { VideoInfo, VideoStd } from "../Types/video.types";

export async function getVideos() {
  const res = await axios.get("");
  return res?.data;
}

export async function uploadVideo(video: VideoStd) {
  const res = await axios.post("/videos/upload", {
    video,
  });
  return res?.data;
}

export async function getVideo(id: string) {
  const res = await axios.get(`/videos/${id}`);
  return res?.data;
}

export async function editVideo(id: string, video: VideoInfo) {
  const res = await axios.post("/videos/edit", { id, video });
  return res?.data;
}

export async function deleteVideo() {
  const res = await axios.post("/delets", {});
  return res?.data;
}

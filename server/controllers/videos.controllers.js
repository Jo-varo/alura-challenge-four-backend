import Video from '../models/Video.js';

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createVideo = async (req, res) => {
  try {
    const video = req.body;
    const newVideo = new Video(video);
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const video = req.body;
    const updatedVideo = await Video.findByIdAndUpdate(id, video, {
      new: true,
    });
    res.json(updatedVideo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedVideo = await Video.findByIdAndDelete(id);
    if (!deletedVideo) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

import { useContext } from "react";
import { FeedContext } from "../context/Feed";

export const useFeed = () => {
    return useContext(FeedContext);
};

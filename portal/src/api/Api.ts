import axios from "axios";
import { Notification } from "../types/Notification";

axios.defaults.baseURL = "";

const sendNotifications = (items: Notification[]): Promise<boolean> => {
  return new Promise((resolve) => {
    axios
      .post("/api/notifications", {
        data: items,
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 208) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(() => {
        resolve(false);
      });
  });
};

export const API = { sendNotifications };

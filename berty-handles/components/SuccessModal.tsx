import { FC } from "react";

import { TLD } from "../lib/config";
import { ProfileImage } from "./ProfileImage";

export const SuccessModal: FC<{
  name: string;
  show: boolean;
  onClose: () => void;
  imageURL?: string | null;
}> = ({ name, show, onClose, imageURL }) => {
  if (!show) {
    return null;
  }
  return (
    <div
      style={{
        zIndex: 2000,
        position: "fixed",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "100vw",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: "24px 0px",
          background: "#020940",
          border: "1px solid #20275E",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontStyle: "normal",
              fontSize: 20,
            }}
          >
            Success
          </div>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            <img src="/img/cross.svg" width={10} height={10} />
          </button>
        </div>
        <div
          style={{
            width: 356,
            background: "#6AAB64",
            borderRadius: "50px 50px 8px 8px",
            marginBottom: 24,
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 356,
              background: "#131A51",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProfileImage url={imageURL} size={200} />
          </div>
          <div
            style={{
              padding: "0px 12px",
              height: 41,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "IBM Plex Mono",
                fontStyle: "normal",
                fontSize: 13,
              }}
            >
              You registered
            </div>
            <div
              style={{
                fontFamily: "IBM Plex Mono",
                fontStyle: "normal",
                fontSize: 13,
                background: "#468740",
                borderRadius: 32,
                height: 25,
                display: "flex",
                alignItems: "center",
                padding: "0px 10px",
              }}
            >
              {name}.{TLD}
            </div>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid #20275E" }} />
        <div
          style={{
            marginTop: 16,
            marginLeft: 24,
            marginRight: 24,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: 154 }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: 16,
                fontFamily: "IBM Plex Mono",
                fontStyle: "normal",
                fontSize: 13,
                color: "#8589A6",
              }}
            >
              Share via socials
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{
                  width: 71,
                  height: 45,
                  background: "#131A51",
                  border: "none",
                  borderRadius: 8,
                }}
              >
                <img src="/img/twitter_logo.svg" height={20} width={20} />
              </button>
              <button
                style={{
                  width: 71,
                  height: 45,
                  background: "#131A51",
                  border: "none",
                  borderRadius: 8,
                }}
              >
                <img src="/img/linkedin_logo.svg" height={20} width={20} />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ borderLeft: "1px solid #20275E", height: 45 }} />
          </div>
          <div style={{ width: 154 }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: 16,
                fontFamily: "IBM Plex Mono",
                fontStyle: "normal",
                fontSize: 13,
                color: "#8589A6",
              }}
            >
              Join Berty Discord
            </div>
            <button
              style={{
                width: "100%",
                height: 45,
                background: "#131A51",
                border: "none",
                borderRadius: 8,
              }}
            >
              <img src="/img/discord_logo.svg" height={20} width={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

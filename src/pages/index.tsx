import React from "react";
import { Inter } from "next/font/google";
import Button from "./components/Button";
import Labels from "./components/Labels";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-1 m-10 p-5 bg-slate-300">
      <div className="text-center text-3xl font-bold m-5">
        <Labels
          icon={
            <svg viewBox="0 0 50 50" width="40px" height="40px">
              <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z" />
            </svg>
          }
          text="Spotify."
        />
      </div>
      <div className="flex justify-center mb-2">
      <Button
      icon={
            <svg viewBox="0 0 48 48" width="25px" height="25px">
          <linearGradient
            id="Ld6sqrtcxMyckEl6xeDdMa"
            x1="9.993"
            x2="40.615"
            y1="9.993"
            y2="40.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2aa4f4" />
            <stop offset="1" stop-color="#007ad9" />
          </linearGradient>
          <path
            fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
            d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
          />
          <path
            fill="#fff"
            d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
          />
          </svg>
      }
          buttonName={"Continue with Facebook".toUpperCase()}
    />
      </div>
      <div className="flex justify-center mb-2">
        <Button
          icon={
            " "
          }
          buttonName={"continue with apple".toUpperCase()}
        />
      </div>
      <div className="flex justify-center mb-2">
        <Button
          icon={
            " "
          }
          buttonName={"continue with apple".toUpperCase()}
        />
      </div>
    </div>
  );
}
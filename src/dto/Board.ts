import React, { useState } from "react";
import { atom } from "recoil";

export interface Board {
  id: number;
  name: string;
  username: string;
  email?: string;
  phone?: string;
  website?: string;
}

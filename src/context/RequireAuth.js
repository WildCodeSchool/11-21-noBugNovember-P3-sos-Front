import { useState, createContext } from "react";

import axios from "axios";

export const RequireAuthContext = createContext();

function RequireAuth() {
  return (
    <div>RequireAuth</div>
  )
}

export default RequireAuth
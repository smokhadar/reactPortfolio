import Project from "./Project";
import React, { useState } from "react"; 
import { projectArray } from "../../utils/projectArray";

export default function ProjectContainer() {
    return (
        <div className="container overflow-hidden text-center">
                <Project projectArray={projectArray} />
        </div>
  );
};
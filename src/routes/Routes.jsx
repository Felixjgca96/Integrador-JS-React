import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros";
import ContactoRoutes from "../pages/ContactoRoutes/ContactoRoutes";
import React from "react";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/contactoroutes" element={<ContactoRoutes />} />
      <Route path="*" element={<PageNotFound />} />
    </ReactDomRoutes>
  );
};

export default Routes;

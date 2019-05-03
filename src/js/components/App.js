import React from "react";
import MainLayout from "./layout/MainLayout";
import Aside from "./layout/Aside";
import Filter from "./filter/Filter";
import TicketListContainer from "./tickets/TicketListContainer";

const App = () => (
  <MainLayout>
    <Aside>
      <Filter />
    </Aside>
    <TicketListContainer />
  </MainLayout>
);

export default App;
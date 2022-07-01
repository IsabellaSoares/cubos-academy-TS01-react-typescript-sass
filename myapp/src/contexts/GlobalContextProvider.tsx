import useGlobalContextProvider from "../hooks/useGlobalContextProvider";
import GlobalContext from "./GlobalContext";

type Props = {
  children: JSX.Element;
};

const GlobalContextProvider = ({ children }: Props) => {
  const valuesProvider = useGlobalContextProvider();

  return (
    <GlobalContext.Provider value={valuesProvider}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

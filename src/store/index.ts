import { useDispatch } from "react-redux";
import { actionCreators } from "./action";
import { bindActionCreators } from "redux";

export const useActionCreator = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
export type { RootState } from "./reducer/UserReducer";
export { typedSelector } from "./reducer/UserReducer";

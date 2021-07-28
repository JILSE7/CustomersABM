import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getCustomers } from "../actions/actions";

export const useFetchCustomers = (customers) => {
    const dispatch = useDispatch()
    useEffect(() => {
        customers.length <= 0 && dispatch(getCustomers());
    }, [dispatch, customers])
}



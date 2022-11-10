import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Education`;
    }, [title])
};

export default useTitle;
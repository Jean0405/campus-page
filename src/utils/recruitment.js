export const getCampers = async () => {
    try {
        const response = await (await fetch(`http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/cv`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })).json();
        return response.message
    } catch (error) {
        return null
    }
}

export const getAllInfoCamper = async (id) => {
    try {
        const response = await (await fetch(`http://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}/cv/user?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })).json();
        return response.message
    } catch (error) {
        return null
    }
}
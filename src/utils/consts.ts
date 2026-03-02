interface IRouteProps {
    url: string,
    name: string,
    label: string
}

export const ROUTES: IRouteProps[] = [
    {
        url: "/",
        label: "About Me",
        name: "Home"
    },
    {
        url: "/resume",
        label: "Resume",
        name: "Resume"
    },
    {
        url: "/portfolio",
        label: "Portfolio",
        name: "Portfolio"
    },
    {
        url: "/contact",
        label: "Contact",
        name: "Contact"
    },
]
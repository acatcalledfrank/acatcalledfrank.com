import "./globals.scss";

export const metadata = {
    title: "acatcalledfrank",
    description: "Tom Evans | Creative Developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default function Footer() {
    return (
        <footer className="bg-background text-foreground">
            <div className="container mx-auto border-t px-6 py-8 text-center">
                <p className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} Patrick Diesta. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

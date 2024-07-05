export default function Input({ expression }) {
    return (
        <input
            className="display-bar"
            type="text"
            value={expression}
            disabled
        />
    );
}

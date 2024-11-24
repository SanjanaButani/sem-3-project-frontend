
const ImageUpload = ({ children, value, onChange, disabled, accept }) => {
    return (
        <label
            htmlFor="contained-button-file"
            className="bg-[#fff] text-[#fff] border border-current shadow-lg rounded-full w-32 h-32 mt-4 flex justify-center items-center hover:cursor-pointer z-0 hover:shadow-none"
        >
            <input
                value={value}
                accept={accept}
                disabled={disabled}
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={disabled ? () => { } : onChange}
            />
            {children}
        </label>
    );
};

export default ImageUpload;
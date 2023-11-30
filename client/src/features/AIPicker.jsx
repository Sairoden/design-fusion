// UI COMPONENTS
import { CustomButton } from "../ui";

function AIPicker({ prompt, setPrompt, generatingImg, onSubmit }) {
  console.log(prompt);

  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton type="outline" customStyles="text-xs">
            Asking AI...
          </CustomButton>
        ) : (
          <>
            <CustomButton
              type="outline"
              onClick={() => onSubmit("logo")}
              customStyles="text-xs"
            >
              AI logo
            </CustomButton>

            <CustomButton
              type="filled"
              onClick={() => onSubmit("full")}
              customStyles="text-xs"
            >
              AI Full
            </CustomButton>
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;

import { useState } from 'react';

export default function EditableTeamName({ defaultName, side }: { defaultName: string, side?: "left" | "right" }) {
  const [name, setName] = useState(defaultName);
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      onBlur={() => setIsEditing(false)} // Save changes when losing focus
      onKeyDown={(e) => {
        if (e.key === "Enter") setIsEditing(false);
      }}
      autoFocus
    />
  ) : (
    <div className={`team-name ${side}`} onClick={() => setIsEditing(true)}>
      {name}
    </div>
  );
}

import { useState, useRef, useMemo, useEffect } from "react";
import { localeCodes, type Locale, type PerkKey } from "../lib/perks";
import { buildShareSearchParams } from "../lib/share";

const COPY_STATUS_RESET_DELAY = 2000;

interface UseShareLinkProps {
    selectedKeys: PerkKey[];
    level: number;
    lang: Locale;
}

export const useShareLink = ({ selectedKeys, level, lang }: UseShareLinkProps) => {
    const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
    const copyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const shareUrl = useMemo(() => {
        if (typeof window === "undefined") return "";
        const params = buildShareSearchParams({ perks: selectedKeys, level, lang });
        return `${window.location.origin}/share?${params.toString()}`;
    }, [selectedKeys, level, lang]);

    const shareStatusMessage = useMemo(() => {
        if (copyStatus === "copied") {
            return lang === localeCodes.en ? "Copied!" : "コピーしました";
        }
        if (copyStatus === "error") {
            return lang === localeCodes.en
                ? "Failed to copy. Please copy the link manually."
                : "コピーに失敗しました。手動でリンクを選択してコピーしてください。";
        }
        return lang === localeCodes.en
            ? "Open the link to view your perks. Share it with others!"
            : "リンクを開くと選択したパーク構成が表示され、シェアできます。";
    }, [copyStatus, lang]);

    useEffect(() => {
        return () => {
            if (copyResetRef.current) {
                clearTimeout(copyResetRef.current);
            }
        };
    }, []);

    const handleCopyShare = async () => {
        if (!shareUrl) return;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopyStatus("copied");
            if (copyResetRef.current) {
                clearTimeout(copyResetRef.current);
            }
            copyResetRef.current = setTimeout(() => setCopyStatus("idle"), COPY_STATUS_RESET_DELAY);
        } catch (error) {
            console.error("Failed to copy share link:", error);
            setCopyStatus("error");
            if (copyResetRef.current) {
                clearTimeout(copyResetRef.current);
            }
            copyResetRef.current = setTimeout(() => setCopyStatus("idle"), COPY_STATUS_RESET_DELAY);
        }
    };

    return {
        shareUrl,
        copyStatus,
        shareStatusMessage,
        handleCopyShare
    };
};

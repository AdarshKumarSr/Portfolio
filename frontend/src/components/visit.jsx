import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCountInline = () => {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("https://counterapi.dev/api/v1/count", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ut_Xq5g0lYjg1ptTKBp4ZaOGzOoze2QkboorlbkB6L7",
          },
          body: JSON.stringify({
            counterName: "portfolio-home-views", // Create this in your dashboard
            eventName: "visit",
          }),
        });

        const data = await response.json();
        if (data?.success && typeof data.count === "number") {
          setViews(data.count);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching visitor count:", err);
        setError(true);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="flex items-center gap-2 text-gray-600 mt-4 text-sm">
      <Eye className="w-4 h-4" />
      {error ? (
        <span>Error loading visitors</span>
      ) : views !== null ? (
        <span>{views} visitors so far</span>
      ) : (
        <span>Loading visitors...</span>
      )}
    </div>
  );
};

export default VisitorCountInline;

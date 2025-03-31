import React from 'react';

const trustpilotreview = () => {
    return (
        <div className="max-w-md border border-border rounded-lg p-6 bg-card">
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm font-medium">Trustpilot</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#00b67a"
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-border pb-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            M
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">Madison</span>
              <span className="text-xs text-muted-foreground">reviewed Suwex</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#00b67a"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm">
        <p className="mb-2">
          "My friend told me about this opportunity and he has already withdrawn his first $500 twice from here. I was a
          little more cautious and only deposited $100 from here, but now I got 13,000 dollars! Looking forward to the
          next giveaway!"
        </p>
      </div>
    </div>
    );
};

export default trustpilotreview;
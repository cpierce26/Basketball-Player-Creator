const dependencies = {
  "Close Shot": [
    {
      "target": "Post Control",
      "minValue": 56
    },
    {
      "target": "Mid-Range Shot",
      "minValue": 66
    },
    {
      "target": "Free Throw",
      "minValue": 66
    },
    {
      "target": "Offensive Rebound",
      "minValue": 86
    },
    {
      "target": "Vertical",
      "minValue": 71
    }
  ],
  "Driving Layup": [
    {
      "target": "Close Shot",
      "minValue": 36
    },
    {
      "target": "Ball Handle",
      "minValue": 66
    },
    {
      "target": "Strength",
      "minValue": 61
    }
  ],
  "Driving Dunk": [
    {
      "target": "Close Shot",
      "minValue": 46
    },
    {
      "target": "Driving Layup",
      "minValue": 46
    },
    {
      "target": "Standing Dunk",
      "minValue": 61
    },
    {
      "target": "Ball Handle",
      "minValue": 66
    },
    {
      "target": "Strength",
      "minValue": 66
    },
    {
      "target": "Vertical",
      "minValue": 46
    }
  ],
  "Standing Dunk": [
    {
      "target": "Close Shot",
      "minValue": 41
    },
    {
      "target": "Driving Dunk",
      "minValue": 41
    },
    {
      "target": "Vertical",
      "minValue": 61
    }
  ],
  "Post Control": [
    {
      "target": "Close Shot",
      "minValue": 31
    },
    {
      "target": "Ball Handle",
      "minValue": 71
    },
    {
      "target": "Offensive Rebound",
      "minValue": 66
    },
    {
      "target": "Strength",
      "minValue": 56
    }
  ],
  "Mid-Range Shot": [
    {
      "target": "Close Shot",
      "minValue": 36
    },
    {
      "target": "Three-Point Shot",
      "minValue": 56
    },
    {
      "target": "Free Throw",
      "minValue": 51
    }
  ],
  "Three-Point Shot": [
    {
      "target": "Mid-Range Shot",
      "minValue": 36
    },
    {
      "target": "Free Throw",
      "minValue": 51
    }
  ],
  "Free Throw": [
    {
      "target": "Mid-Range Shot",
      "minValue": 51
    },
    {
      "target": "Three-Point Shot",
      "minValue": 66
    }
  ],
  "Pass Accuracy": [
    {
      "target": "Ball Handle",
      "minValue": 56
    }
  ],
  "Ball Handle": [
    {
      "target": "Driving Layup",
      "minValue": 41
    },
    {
      "target": "Post Control",
      "minValue": 56
    },
    {
      "target": "Pass Accuracy",
      "minValue": 51
    },
    {
      "target": "Speed With Ball",
      "minValue": 46
    }
  ],
  "Speed With Ball": [
    {
      "target": "Ball Handle",
      "minValue": 31
    },
    {
      "target": "Speed",
      "minValue": 31
    },
    {
      "target": "Agility",
      "minValue": 41
    }
  ],
  "Interior Defense": [
    {
      "target": "Perimeter Defense",
      "minValue": 76
    },
    {
      "target": "Steal",
      "minValue": 71
    },
    {
      "target": "Block",
      "minValue": 56
    },
    {
      "target": "Defensive Rebound",
      "minValue": 46
    },
    {
      "target": "Strength",
      "minValue": 46
    }
  ],
  "Perimeter Defense": [
    {
      "target": "Interior Defense",
      "minValue": 66
    },
    {
      "target": "Steal",
      "minValue": 56
    },
    {
      "target": "Block",
      "minValue": 66
    },
    {
      "target": "Defensive Rebound",
      "minValue": 56
    },
    {
      "target": "Agility",
      "minValue": 46
    },
    {
      "target": "Strength",
      "minValue": 61
    }
  ],
  "Steal": [
    {
      "target": "Interior Defense",
      "minValue": 41
    },
    {
      "target": "Perimeter Defense",
      "minValue": 51
    },
    {
      "target": "Agility",
      "minValue": 61
    }
  ],
  "Block": [
    {
      "target": "Interior Defense",
      "minValue": 46
    },
    {
      "target": "Steal",
      "minValue": 71
    },
    {
      "target": "Defensive Rebound",
      "minValue": 26
    },
    {
      "target": "Vertical",
      "minValue": 56
    }
  ],
  "Offensive Rebound": [
    {
      "target": "Close Shot",
      "minValue": 41
    },
    {
      "target": "Defensive Rebound",
      "minValue": 41
    },
    {
      "target": "Vertical",
      "minValue": 71
    }
  ],
  "Defensive Rebound": [
    {
      "target": "Interior Defense",
      "minValue": 51
    },
    {
      "target": "Block",
      "minValue": 66
    },
    {
      "target": "Offensive Rebound",
      "minValue": 56
    },
    {
      "target": "Vertical",
      "minValue": 71
    }
  ],
  "Speed": [
    {
      "target": "Speed With Ball",
      "minValue": 56
    },
    {
      "target": "Perimeter Defense",
      "minValue": 56
    },
    {
      "target": "Agility",
      "minValue": 41
    },
    {
      "target": "Vertical",
      "minValue": 56
    }
  ],
  "Agility": [
    {
      "target": "Steal",
      "minValue": 71
    },
    {
      "target": "Defensive Rebound",
      "minValue": 56
    },
    {
      "target": "Speed",
      "minValue": 36
    }
  ],
  "Strength": [
    {
      "target": "Post Control",
      "minValue": 61
    },
    {
      "target": "Interior Defense",
      "minValue": 46
    },
    {
      "target": "Perimeter Defense",
      "minValue": 81
    }
  ],
  "Vertical": [
    {
      "target": "Close Shot",
      "minValue": 46
    },
    {
      "target": "Driving Dunk",
      "minValue": 46
    },
    {
      "target": "Standing Dunk",
      "minValue": 61
    },
    {
      "target": "Block",
      "minValue": 71
    },
    {
      "target": "Offensive Rebound",
      "minValue": 81
    },
    {
      "target": "Defensive Rebound",
      "minValue": 63
    }
  ]
};
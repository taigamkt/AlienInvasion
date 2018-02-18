let web3 = window.web3;

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
console.log(web3.eth.accounts);

var balanceWei = web3.eth.getBalance(web3.eth.accounts[0]).toNumber();
var balance = web3.fromWei(balanceWei, 'ether');
console.log(balance);


var AliensInvasionContract = web3.eth.contract( [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approvedFor",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "url",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "tokensOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "assetTypes",
      "outputs": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageUrl",
          "type": "string"
        },
        {
          "name": "assetType",
          "type": "string"
        },
        {
          "name": "supply",
          "type": "uint256"
        },
        {
          "name": "properties",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "takeOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_url",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "assetTypeId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "fromTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "toTokenId",
          "type": "uint256"
        }
      ],
      "name": "AssetTypeCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_title",
          "type": "string"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_imageUrl",
          "type": "string"
        },
        {
          "name": "_assetType",
          "type": "string"
        },
        {
          "name": "_supply",
          "type": "uint256"
        },
        {
          "name": "_properties",
          "type": "string"
        }
      ],
      "name": "createAssetType",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_assetTypeId",
          "type": "uint256"
        }
      ],
      "name": "getAssetType",
      "outputs": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageUrl",
          "type": "string"
        },
        {
          "name": "assetType",
          "type": "string"
        },
        {
          "name": "supply",
          "type": "uint256"
        },
        {
          "name": "properties",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getAssetTypeFromTokenId",
      "outputs": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageUrl",
          "type": "string"
        },
        {
          "name": "assetType",
          "type": "string"
        },
        {
          "name": "supply",
          "type": "uint256"
        },
        {
          "name": "properties",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getAssetTypeFromIndex",
      "outputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageUrl",
          "type": "string"
        },
        {
          "name": "assetType",
          "type": "string"
        },
        {
          "name": "supply",
          "type": "uint256"
        },
        {
          "name": "properties",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]);

  var assets = {};
  var selectedAsset = -1;

  let setAssetSelected = function(tokenId) {
    selectedAsset = tokenId;
    let asset = assets[selectedAsset];
    $('#asset-title').html(asset.title);
    $('#asset-description').html(asset.description);
    $('#asset-image-wrapper-img').attr("src",asset.imageUrl);
    loadGame(asset.properties.spriteImage);
    populateOtherAssets();
  }

  let populateOtherAssets = function() {
    //debugger;
    $("#other-assets >> ul").html('');
    for (var tokenId in assets) {
      let asset = assets[tokenId];
      if(asset.tokenId != selectedAsset) {
        let li = $('<li ><div class="other-asset col-md-4 col-sm-6"><div class="other-asset-wrapper"><div class="other-asset-image"><img src="'+asset.imageUrl+'" /></div><div class="other-asset-details"><div class="asset-details-height"><div class="other-asset-title">'+asset.title+'</div><div class="other-asset-description">'+asset.description+'</div></div><button type="button" id="play-'+asset.tokenId+'" class="btn btn-primary btn-lg btn-block">Play</button></div></div></li>');
        //<img src="'+asset.imageUrl+'" id="other-asset-image-'+asset.tokenId+'"/>
        $("#other-assets >> ul").append(li);
        $('#play-'+asset.tokenId).click(function() {
          setAssetSelected(asset.tokenId);
        })


      }
    };
  }

  let loadTokens = async function (selectFirst) {
    let address = $('#smart-contract-refresh-text').val();
    assets = {};
    var AliensInvasion = AliensInvasionContract.at(address);
    console.log(AliensInvasion);
    //debugger;
    let balance = await AliensInvasion.balanceOf.call(web3.eth.accounts[0]).toNumber();
    console.log("account:"+web3.eth.accounts[0]);
    console.log("# assets:"+balance);
    for(i = 0; i < balance; i++) {

      let asset = await AliensInvasion.getAssetTypeFromIndex.call(web3.eth.accounts[0], i);
      let tokenId = asset[0].toNumber();
      let title = asset[1];
      let description = asset[2];
      let imageUrl = asset[3];
      let assetType = asset[4];
      let supply = asset[5].toNumber();
      let properties = JSON.parse(asset[6]);

      assets[tokenId] = {
        tokenId: tokenId,
        title: title,
        description: description,
        imageUrl: imageUrl,
        assetType: assetType,
        supply: supply,
        properties: properties
      };

      console.log("TokenId: "+tokenId);
      console.log("Title: "+title);
      console.log("Description: "+description);
      console.log("ImageUrl: "+imageUrl);
      console.log("Supply: "+supply);
      console.log("TokenId: "+tokenId);
      console.log("Properties: "+properties);
      console.log(asset);

      if(i == 0 && selectFirst) {
        setAssetSelected(tokenId);
      }
    }
    populateOtherAssets();
  }



  $( document ).ready(function() {
    $('#smart-contract-refresh-btn').click(function() {
      loadTokens(true);
    })
      $('#smart-contract-refresh-text').val('0x67f1f74bc9ba0a854e9126b0212c3a8c4e54e589');
      loadTokens(true);
      console.log( "document loaded" );
      //loadGame("images/sprites3.png");
      //loadGame("images/sprites.png");
  });

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Vault {
    IERC20 public token;

    uint public totalSupply;
    mapping(address => uint) public balanceOf;

    function deposit(uint _amount, address _token)public{
        token = IERC20(_token);
        token.transferFrom(msg.sender, address(this), _amount);
        balanceOf[msg.sender] += _amount;
        totalSupply += _amount;
    }

    function withdraw(uint _amount, address _token)public{
        token = IERC20(_token);
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");
        token.transfer(msg.sender, _amount);
        balanceOf[msg.sender] -= _amount;
        totalSupply -= _amount;
    }

    function withdrawAll(address _token)public{
        token = IERC20(_token);
        withdraw(balanceOf[msg.sender], _token );
    }

    function transfer(address _to, uint _amount, address _token)public{
        token = IERC20(_token);
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");
        balanceOf[msg.sender] -= _amount;
        token.transfer(_to, _amount);
    }
}

interface IERC20 {
    function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns (uint);

    function transfer(address recipient, uint amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint amount);
    event Approval(address indexed owner, address indexed spender, uint amount);
}
